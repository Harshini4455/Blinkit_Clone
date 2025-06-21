const verifyEmailTemplate = ({name, url})=>{
    return `
    <p> Dear ${name}</p>
    <p>Thank You for registering Blinkit</p>
    <a href=${url} 
    style="color:white; background: black; margin-top: 10px; padding: 1rem" >
    Verify Email
    </a>

    `
}

export default verifyEmailTemplate