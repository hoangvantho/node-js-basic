import pool from '../configs/connectDB';


let getHomepage = async (req,res)=>{
    // Viet Logic o day
  const [rows, fields] = await pool.execute('SELECT * FROM users');
  console.log("Checking selected:",rows);
  return res.render('index.ejs', {dataUser: rows,test: 'XIn chao Node JS' })

}

let getDetailPage =async(rep,res)=>{
  let userId = rep.params.id;
  let [user] = await pool.execute(`select * from users where id =?`,[userId]);
 
  return res.send(JSON.stringify(user))

}
let createNewUser =async(req,res)=>{
  console.log('check request: ', req.body)

  let {firstName,lastName,address,email} = req.body;
  await pool.execute('insert into users(firstName, lastName,address, email) values(?,?,?,?)',
  [firstName,lastName,address,email]);
  return res.redirect('/');
}

module.exports ={
    getHomepage, getDetailPage, createNewUser
}