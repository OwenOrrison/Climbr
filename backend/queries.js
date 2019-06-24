const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'climbr_api',
  password: 'password',
  port: 5432,
})


/////////////////Users//////////////////


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

  /////////////////Messages/////////////////////

  const getMessages = (request, response) => {
    pool.query('SELECT * FROM messages ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getMessagesById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM messages WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//   const checkUser = (req, res) => {
//     var username = req.body.username;
//     var password= req.body.password;
//     pool.query("SELECT 1 FROM users WHERE username = $1 AND password = $2", [username, password], (err,results)=>{
//         if(err) console.log(err);
//         //what is the return? how do I check the database for accuracy of login?
//         if(results.rowCount > 0){
//             res.send({'success':true, 'message': username});
//         } else {
//             console.log(results)
//             res.send({'success':false, 'message': "username or password is incorrect"})
//         }
//     })
// }

  const createMessages = (request, response) => {
    const { username, message, thread } = request.body
  
    pool.query('INSERT INTO messages (message, thread, user_id) VALUES ($1, $2, $3)', [message, thread, username], (error, results) => {
      if (error) {
        throw error
      }
      console.log(request)
      console.log(response)
      response.status(201).send({username})
    })
  }

  const updateMessages = (request, response) => {
    const id = parseInt(request.params.id)
    const { message } = request.body
  
    pool.query(
      'UPDATE messages SET message = $1 WHERE id = $3',
      [message, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Message modified with ID: ${id}`)
      }
    )
  }

  const deleteMessages = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM messages WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Message deleted with ID: ${id}`)
    })
  }


  ///////PG Messages//////////
  // const getPg = (request, response) => {
  //   const thread  = 'PGChat'
  //   pool.query('SELECT * FROM messages WHERE thread= $1' ,[thread], (error, results) => {
  //     if (error) {
  //       throw error,
  //       console.log(error)
  //     }
  //     response.status(200).json(results.rows)
  //   })
  // }
  const getPg = (request, response) => {
    pool.query('SELECT * FROM messagespg ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

    ///////PRG Messages//////////
    const getPRG = (request, response) => {
      const { thread } = request.body
      pool.query('SELECT * FROM messages WHERE thread= $1' ,[thread], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
///////TCE Messages//////////
  const getTCE = (request, response) => {
    const { thread } = request.body
    pool.query('SELECT * FROM messages WHERE thread= $1' ,[thread], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
///////TCS Messages//////////
    const getTCS = (request, response) => {
      const { thread } = request.body
      pool.query('SELECT * FROM messages WHERE thread= $1' ,[thread], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
  ///////TCT Messages//////////
  const getTCT = (request, response) => {
    const { thread } = request.body
    pool.query('SELECT * FROM messages WHERE thread= $1' ,[thread], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    checkUser,
    getMessages,
    getMessagesById,
    createMessages,
    updateMessages,
    deleteMessages,
    getTCT,
    // createMessagesTCT,
    getTCS,
    // createMessagesTCS,
    getTCE,
    // createMessagesTCE,
    getPRG,
    // createMessagesPRG,
    getPg,
    // createMessagesPG,
  }