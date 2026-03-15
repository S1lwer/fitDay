import './Modal.css'
import { Check } from 'lucide-react'
import Link from "next/link";

const Model = (props) => {
const {fn} = props





    const myidbotlink = 'https://t.me/myidbot'
    const fitdaybot = 'https://t.me/FitDayEasyBot'

return(
    <div className="modal">
<Check/>
<h4>you re almost here!</h4>
<p>step #1:<Link href={myidbotlink} target='_blank'><span className='active_link'>Get your account ID</span></Link></p>
<p>step #2:<Link href={fitdaybot}><span className='active_link'>Open link </span>and send our bot command: /start</Link></p>
<button onClick={(e)=>{ 
e.preventDefault();
fn(false)
}}>
    alright
    </button>    
    </div>
)

}
export default Model 