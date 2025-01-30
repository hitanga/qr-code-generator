import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }

    return (
        <div class="container qr-code-container">
            <h1>QR Code Generator</h1>
            <div className="qr-code-block">
                <input onChange={(e) => setInput(e.target.value)}
                type="text" 
                className="form-control qr-code-input"
                name="qr-code" 
                value={input}
                placeholder="Enter your value here" 
                />
                <button className="btn btn-primary" disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div className="qr-code">
                <QRCode id="qr-code-value" value={qrCode} size={200} background="#00ff00"/>
            </div>
        </div>
    )
}