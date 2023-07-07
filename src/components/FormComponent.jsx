import './FormComponent.css'

export const FormComponent = ({
    form,
    handleSubmit,
    handleOnChange,
    emailValid
}) => {
    return (
        <form action="#" ref={form}>
            <label htmlFor='email-input'>Email address</label>
            {emailValid === false ? <p id='error' className='error-message'>Valid email required</p> : null}
            <input 
                type="text" 
                placeholder='email@company.com' 
                id='email-input'
                className='email' 
                name='email'
                onChange={
                    (event) => {
                        handleOnChange(event.target.value)
                    }
                }
            />
            <input 
                type="submit" 
                value='Subscribe to monthly newsletter'
                className='imput-submit'
                onClick={handleSubmit}
            />
        </form>
    )
}