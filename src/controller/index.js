const homePage = (req, res)=>{
    res.status(200).send(`<h1>Welcome to my website</h1>
    <h2>Mentor</h2>
    <pre>

* GET Get All Mentors = api/mentors
* POST Add New Mentor = api/mentors
* DELETE Delete Mentor = api/mentors/:id
* GET Mentor Student List = api/mentors/students/:mentor_id
* PUT Edit Mentor = api/mentors/:id
* GET Get One Mentor = api/mentors/:id
</pre>

    <h2>Student</h2>

    <pre>

* GET Get All Student = api/student
* POST Add New Student = api/student
* DELETE Delete Student = api/student/:id
* GET GEt One Studnt = api/student/:id
* PUT Edit Sudent = api/student/:id
</pre>

    <h2>Assign</h2>
    <pre>

* POST Assign multy Student = api/assign/student/:batch/mentor/:mentor_id
</pre>

    `);
}

export default {homePage}