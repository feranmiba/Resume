import Artica1stImage from './Image/Artica1.png'
import Artica2ndImage from './Image/Artica2.png' 
import Artica3rdImage from './Image/articarel.png'
import Ecommerce1 from './Image/Screenshot 2023-10-31 125126.png'
import Ecommerce2 from './Image/ecommerce2.png'
import Ecommerce3 from './Image/ecommerce3.png'
import Dictionary1 from './Image/Bottomfitness.png'
import Dictionary2 from './Image/fitness .png'
import Dictionary3 from './Image/mobilefit.png'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'



const Details = [
    {
        image1: Ecommerce1,
        image2: Ecommerce2,
        image3: Ecommerce3,
        skills: [{ icons: <FaCss3 /> , skill: 'CSS'}, { icons: <FaReact /> , skill: 'REACT'}],
        name: 'E-commerce app',
        Link: 'https://feranmiba.github.io/e-commerce-page/',
        LinkName: 'e-commerce-app.netlify.app',
        Repo: 'https://github.com/feranmiba/e-commerce-page',
        RepoLinkName: 'github.com/feranmiba'
    }, 
    {
        image1: Artica1stImage,
        image2: Artica2ndImage,
        image3: Artica3rdImage,
        skills: [{ icons: <FaCss3 /> , skill: 'CSS'}, { icons: <FaReact /> , skill: 'REACT'}],
        name: 'ARTICA',
        Link: 'https://artica-explore.netlify.app/',
        LinkName: 'artica-explore.netlify.app',
        Repo: 'https://github.com/feranmiba/artica',
        RepoLinkName: 'github.com/feranmiba'
    }, 
    {
        image1: Dictionary2,
        image2: Dictionary3,
        image3: Dictionary1,
        skills: [{ icons: <FaCss3 /> , skill: 'CSS'}, { icons: <FaReact /> , skill: 'REACT'}],
        name: 'Get-Fit',
        Link: 'https://get-fitted.netlify.app/',
        LinkName: 'fittness.netlify.app',
        Repo: 'https://github.com/feranmiba/fitness',
        RepoLinkName: 'github.com/feranmiba'
    }
]

export default Details;