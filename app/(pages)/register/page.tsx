import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import GreenWooviLogo from '../../../public/static/images/icons/svgexport-4.svg'

export default function Register() {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-3">
                <Image 
                    src={GreenWooviLogo}
                    alt="Green Woovi logo"
                    width={134}
                    height={40}/>
                <h1 className="font-bold text-3xl">Venda mais com o Pix</h1>
                <h2 className="font-bold text-2xl mb-4">Sem mensalidade, sem taxa de ativação</h2>
                
                <form className="bg-white flex px-5 py-8 w-2/5 flex-col rounded-xl ">
                    <div className="space-y-6">
                        <TextField id="outlined-basic" className="border w-full" label="Nome" variant="outlined" />
                        <TextField id="outlined-basic" className="border w-full" name="" label="Sobrenome" variant="outlined" />
                        <TextField id="outlined-basic" className="border w-full" name="" label='E-mail' variant="outlined" />
                        <TextField id="outlined-basic" className="border w-full" name="" label='Nome da sua empresa' variant="outlined" />
                        <TextField id="outlined-basic" className="border w-full" name="" label='CNPJ' variant="outlined" />
                        <TextField id="outlined-basic" className="border w-full" name="" label='Site' variant="outlined" />
                        <FormControlLabel control={<Checkbox />} label="Eu aceito os Termos de Uso e as políticas de privacidade." />
                        <Button variant="outlined" className="w-full">Continuar</Button>
                        <div className='text-teal-500 justify-center align-middle items-center'>
                            <p>Já tem uma conta? Entrar</p>
                            <p>Seus dados são criptografados</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}