import Card from './showdata'
import './App.css'
 var data=[
     {
         "id":1,
         "title":"Mobile Engine",
         "list":["Android","BalckBerry","Apple"]
     },
     {
        "id":2,
        "title":"Mobile Company",
        "list":["Android","BalckBerry","Apple"]
    }
 ]
 export default function App(){
      return (
        <div id='sai'>
        {data.map((item) => (
          <Card heading={item.title} list={item.list} key={item.id} />
        ))}
        
      </div>
        )
 }