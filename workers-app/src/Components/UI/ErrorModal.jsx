import React from 'react'
import { Button } from './button'
import { Card } from './card'
const ErrorModal = (props) => {
    const{error}=props
    const{onConfirm,message,title}=error
    return (
        <div className="error-modal">
            <div
                className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
                onClick={onConfirm}
            ></div>
            <Card className="w-[36rem] p-0 z-20">
                <header className="bg-red-700 p-4  rounded-t-xl">
                    <h2 className="text-center text-xl text-white">
                        {title}
                    </h2>
                </header>
                <section className="p-4">{message}</section>
                <footer className="p-4 flex justify-end">
                    <Button className="w-32" onClick={onConfirm}>Tamam</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal