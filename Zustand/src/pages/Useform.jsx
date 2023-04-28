function Useform() {

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const name = (e.target as any).name.value;
        const email = (e.target as any).email.value;
    }
    return (
        <div>
            <form onSubmit={() => {}} >
                <input name="name" placeholder="Nome"/>

                <input name="email" placeholder="Email"/>

                <button type="submit">Create User</button>
            </form>
        </div>

    )
}
export default Useform