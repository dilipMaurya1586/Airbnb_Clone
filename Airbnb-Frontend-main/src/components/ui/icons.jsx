
import icons from '@/lib/icons'

const Icon = ({icon, ...props}) => {
 const IConCompoments =icons[icon];
 return<IConCompoments {...props}/>
}

export default Icon
