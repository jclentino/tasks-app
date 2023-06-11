const { GraphQLID, GraphQLString } = require('graphql')
const { TaskType } = require('./typedef')
const { User, Task } = require('../models')
const { createJWT } = require('../utils')

// Users 
const register = {
    type: GraphQLString,
    description: "Create new user and return a token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString}, 
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }, 
    },   
    resolve: async (__, args)=> {
        try {
            const user = await User.create({ ...args})
            return createJWT({
                _id: user.id, 
                username: user.username,
                email: user.email,
                displayName: user.displayName
            })
        } catch (e){
            throw new Error(e)
        }
    }
}

const login = {
    type: GraphQLString, 
    description: 'Validate User and generate Token',
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve: async (__, { email, password })=> {
        try {
            const user = await User.findOne({ email: email }).select('+password')
            if (!user || password !== user?.password ){
                throw new Error('Invalid credentials')
            }
            
            return createJWT({
                _id: user.id, 
                username: user.username,
                email: user.email,
                displayName: user.displayName
            })
        } catch (e){
            throw new Error(e)
        }
    }
}

// Tasks 
const createTask = {
    type: TaskType,
    description: 'Create a new Task',
    args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    },
    resolve: async (_, args, { verifiedUser } )=> {
        try {
            if (!verifiedUser){
                throw new Error('Unauthorizated')
            }

            return await Task.create({
                authorId: verifiedUser._id,
                ...args
            })
        } catch (e){
            throw new Error(e)
        }
    }
}

const updateTask = {
    type: TaskType,
    description: 'Update Task by Id',
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    },
    resolve: async (_, { id, title, description,  }, { verifiedUser } )=> {
        try {
            if (!verifiedUser){
                throw new Error('Unauthorizated')
            }

            return await Task.findOneAndUpdate({
                _id: id,
                authorId: verifiedUser._id
            }, {
                title, 
                description, 
            }, {
                new: true
            })

        } catch (e){
            throw new Error(e)
        }
    }
}

const deleteTask = {
    type: GraphQLString,
    description: 'Delete Task by Id',
    args: {
        id: { type: GraphQLID },
    },
    resolve: async (_, { id }, { verifiedUser } )=> {
        try {
            if (!verifiedUser){
                throw new Error('Unauthorizated')
            }
    
            await Task.deleteOne({
                _id: id,
                authorId: verifiedUser._id
            })
    
            return 'Task delete'
        } catch (e){
            throw new Error(e)
        }
    }
}

module.exports = { register, login, createTask, updateTask, deleteTask }

