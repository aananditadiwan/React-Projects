import { useEffect, useState,useCallback, useRef } from 'react'


function PasswordGenerator(){
    const [password, setPassword] = useState('')
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [length, setLength] = useState(8)
    let passwordRef = useRef(null)

    const generatePassword = useCallback(() =>{
        let pass = ""
        let allowedInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed){
            allowedInput += "0123456789"
        }
        if(charAllowed){
            allowedInput += "!@#$%^&*-_+=[]{}~`"
        }

        for( let i=0; i<length ; i++){
            let char = Math.floor( Math.random() * allowedInput.length)
            pass += allowedInput.charAt(char)
        }
        setPassword(pass)
    },[length,numberAllowed,charAllowed])

    useEffect(()=>{
        generatePassword()
    },[length,numberAllowed,charAllowed,generatePassword])

    const copyPasswordToClipboard = () =>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
    }

    return(
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>

                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    < input
                        type='text'
                        value={password}
                        readOnly
                        className="outline-none w-full py-1 px-3"
                        placeholder='Password'
                        ref={passwordRef}
                    />
                    <button         
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
                </div>

                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type='range'
                            min={6} max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e)=>setLength(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={numberAllowed}
                            id='numberInput'
                            onChange={()=>setNumberAllowed(prevValue=>!prevValue)}                                                          
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={charAllowed}
                            id='characterInput'
                            onChange={()=>setCharAllowed(prevValue=>!prevValue)}
                        />
                        <label htmlFor='characterInput'>Characters</label>
                    </div>
                </div>

            </div>
        </>
    )
}
export default PasswordGenerator