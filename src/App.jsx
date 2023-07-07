import './App.css'
import { FormContainer } from './container/FormContainer'
import { ImgComponent } from './components/imgComponent'
import { TextComponent } from './components/TextComponent'
import { FormComponent } from './components/FormComponent'
import React from 'react'
import { SuccessComponent } from './components/SuccessComponent'

function App() {
  const form = React.useRef(null)
  const [emailValid, setEmailValid] = React.useState(null)
  const [email, setEmail] = React.useState(false)
  const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData (form.current)

      const data = {
          email: formData.get('email'),
      }

      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

      setEmailValid(isValid)
      setEmail(data.email)

      const errorInputState = document.getElementById('email-input')
      if (!isValid) {            
          setEmailValid(false)
          errorInputState.classList.add('error')
      } else {
          setEmailValid(true)
          errorInputState.classList.remove('error')
      }
  }  
  const handleOnChange = (value) => {
    const errorInputState = document.getElementById('email-input')
    if (value === '') {            
      setEmailValid(null)
      errorInputState.classList.remove('error')
    } 
  }
  const handleDismiss = () => {
    setEmailValid(null)
  }
  return (
    <>
      <main>
        <FormContainer>
          <ImgComponent/>
          <div className='description-container'>
            <TextComponent/>
            <FormComponent 
              emailValid={emailValid}
              handleSubmit={handleSubmit} 
              form={form}
              handleOnChange={handleOnChange}
            />
          </div>
        </FormContainer>
        {
          emailValid === true ? 
          <SuccessComponent
            handleDismiss={handleDismiss}
            email={email}
          /> 
          : 
          null}
      </main>
    </>
  )
}

export default App
