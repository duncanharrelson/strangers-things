export default function HomePage () {
    return (
        <>
    <h1>Stranger's Things</h1>

    <form>
        <h2>Log in:</h2>
        <label>
            Username: <input/>
            Password: <input/>

            <h5>Not Registered? Click here.</h5>


        </label>
    </form>
    </>
    )
}

// return ( 
//     <>
//     <div className="npr">
//         <h2 className="new-player">New Player Registration:</h2>
//         <form>
//             <label className="name">
//                 Name: <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
//             </label>
//             <label className="breed">
//                 Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed"/>
//             </label>
//             <br />
//             <br />
//             <button className="submit" type="submit">Submit</button>
//         </form>
//         </div>
//     </>
// );