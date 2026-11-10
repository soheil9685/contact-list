export default function Dashboard(){
    return(
        <h1>Dashboard page</h1>
    )
}

export async function getServerSideProps(context) {
    console.log(context.req.cookies)

    return {
        props : {}
    }
}