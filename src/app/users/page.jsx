async function userList() {
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users;
}

export default async function Page(){
    let users = await userList();
    return(
        <div>
            <h1>Users List</h1>
            {
                users.map((item)=>(
                    <div>
                        <h1>{item.firstName +" "+item.lastName}</h1>
                    </div>
                ))
            }
        </div>
    )
}