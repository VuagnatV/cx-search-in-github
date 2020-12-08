const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const initDatabase = require('./database')
const { DataTypes } = require('sequelize');
var cors = require('cors')

dotenv.config()

const port =  process.env.DATABASE_PORT
  
const db = initDatabase()

const User = db.define('User', {
  login: { type: DataTypes.STRING },
  id: { type: DataTypes.INTEGER, primaryKey: true },
  node_id: { type: DataTypes.STRING },
  avatar_url: { type: DataTypes.STRING },
  gravatar_id: { type: DataTypes.STRING },
  url: { type: DataTypes.STRING },
  html_url: { type: DataTypes.STRING },
  followers_url: { type: DataTypes.STRING },
  gists_url: { type: DataTypes.STRING },
  starred_url: { type: DataTypes.STRING },
  subscriptions_url: { type: DataTypes.STRING },
  organizations_url: { type: DataTypes.STRING },
  repos_url: { type: DataTypes.STRING },
  events_url: { type: DataTypes.STRING },
  received_events_url: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },
  site_admin: { type: DataTypes.BOOLEAN },
  name: { type: DataTypes.STRING },
  company: { type: DataTypes.STRING },
  blog: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  hireable: { type: DataTypes.BOOLEAN },
  bio: { type: DataTypes.STRING },
  twitter_username: { type: DataTypes.STRING },
  public_repos: { type: DataTypes.INTEGER },
  public_gists: { type: DataTypes.INTEGER },
  followers: { type: DataTypes.INTEGER },
  following: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE },
}, {
  //timestamps: false
});

function createTable(){
  db.sync().then()
}

createTable()

const app = express()

app.use(cors())

app.get('/users/:username', async (req, res) => {
  const {username} = req.params
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  if((Object.keys(data))[0] == "message"){
    await User.findOrCreate(
      {where: {id: -1, name: "User not found"}}
    )
    res.json(await User.findByPk(-1))
  }
  else{
    if(!(await User.findByPk(data.id))) {
      await User.create(data)
    }
    res.json(data)
  }
})
  
app.listen(port, () => {
  console.log(`✨ Server is listening on port ${port}`)
})
