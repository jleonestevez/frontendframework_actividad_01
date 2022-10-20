

function Profile({ avatar,username,bio}) {

    return <div style={{background:'#f8f9fa',
        borderColor:"#e74829",
    borderWidth:"1px",
    borderBottom:"solid"}}>
        <div> <img style={{width:'90px'}} src={avatar} alt="avatar"/> </div>
        <div style={{fontWeight:"bold"}}>{username}</div>
        <div>{bio}</div>
    </div>;
}

export default  Profile;