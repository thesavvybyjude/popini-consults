import { ImageResponse } from 'next/og'
import * as fs from 'fs'
import * as path from 'path'

export const size = {
    width: 128,
    height: 128,
}
export const contentType = 'image/png'

export default function Icon() {
    const imagePath = path.resolve('./public/dark gray.png')
    const imageBuffer = fs.readFileSync(imagePath)
    const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    borderRadius: '32px',
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={base64Image} width="90" height="90" />
            </div>
        ),
        { ...size }
    )
}
