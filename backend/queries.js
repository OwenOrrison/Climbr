const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'climbr_api',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const checkUser = (req, res) => {
    var username = req.body.username;
    var password= req.body.password;
    pool.query("SELECT 1 FROM users WHERE username = $1 AND password = $2", [username, password], (err,results)=>{
        if(err) console.log(err);
        //what is the return? how do I check the database for accuracy of login?
        if(results.rowCount > 0){
            res.send({'success':true, 'message': username});
        } else {
            console.log(results)
            res.send({'success':false, 'message': "username or password is incorrect"})
        }
    })
}

  const createUser = (request, response) => {
    const { username, password } = request.body
  
    pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
      if (error) {
        throw error
      }
      console.log(response)
      response.status(201).send({username})
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, password } = request.body
  
    pool.query(
      'UPDATE users SET username = $1, password = $2 WHERE id = $3',
      [username, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    checkUser
  }