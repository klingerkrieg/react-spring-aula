import './layout.css';
import Menu from './Menu';

export default function Layout(props){
    return  <div className="App">
        
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        

        <div className="d-flex flex-column content">
            <div className="p-2 top">
                <img src="https://portal.ifrn.edu.br/portal_css/tema2011/++resource++ifrn.tema2011.images/logo.png" />
            </div>
            <Menu></Menu>
            <div className='p-2 flex-fill middle'>
                {props.children}
            </div>
            <div className="p-2 bottom">
                Exemplo de layout
            </div>
        </div>
    </div>
}
