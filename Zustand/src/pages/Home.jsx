import useUseStore from "../store/use"
function Home() {
    const users = useUseStore(state => state.users);
    return (
        <div>
            {users?.map((user) => (
            <p key={Math.random()}>{user.name} | {user.email}</p>
            ))}
            
        </div>

    
    )
}
export default Home