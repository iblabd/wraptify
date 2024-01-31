import { AspectRatio } from '../ui/aspect-ratio'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

const WrapFrame = ({ children }) => {
  return (
    <div className="flex w-full select-none justify-center">
      <DeviceFrameset
        device="Nexus 5"
        height={512}
        width={288}
      >
        {children}
      </DeviceFrameset>
    </div>
  )
}

export default WrapFrame
