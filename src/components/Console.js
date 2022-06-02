import '../App.css'
import { useEffect, useState } from 'react'

const Console = () => {

    const [lines, setLines] = useState([<p key={0}>{'>'}</p>])
    const textLines = [
        'cd ./seth_website',
        'npm start',
        'starting development server',
        '......'
    ]

    const update = (loop) => {
        let line = lines[lines.length - 1].props.children.toString()
        if(textLines[lines.length - 1] && lines.length !== 5) {
            line += textLines[lines.length - 1].charAt(loop - 1)
            if(loop - 1 < textLines[lines.length - 1].length){
                window.setTimeout(() => {
                    const newLines = lines
                    newLines[lines.length - 1] = <p key={lines.length - 1}>{line}</p>
                    setLines([...newLines])
                }, lines.length !== 3 ? lines.length === 4 ? 200 : 50 : 0)
            } else {
                window.setTimeout(() => {
                    if(lines.length < 4){
                        const newLines = lines
                        newLines.push(<p key={lines.length}>{'>'}</p>)
                        setLines([...newLines])
                    } else {
                        const newLines = [
                            <p key={0}>{'>'}Compiled with warnings</p>, 
                            <p key={1}>{'>'}Website Under Construction</p>,
                            <p key={2}>{'>'}Contact Info</p>,
                            <p key={3}>{'>'}seth@ths.ca</p>,
                            <p key={4}>{'>'}</p>
                        ]
                        setLines([...newLines])
                    }
                }, lines.length !== 4 ? 300 : 900)
            }
        }
    }

    useEffect(() => {
        update(lines[lines.length - 1].props.children.toString().length)
    }, [lines])

    return(
        <div>
            {lines}
        </div>
    )
}

export default Console