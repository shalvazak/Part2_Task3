import { Component } from 'react';
import './App.css';
import Card from "./components/Card";

const data = [
  {
    id: 1,
    title: "პოლიტიკის ფილოსოფია",
    img: "https://saba.com.ge/content/images/book/b/db0abf38b2e644339ea56044b1414e2f.png",
    characters: ["character 1", "character 2", "character 3", "character 4"],
    description: "დიდი გერმანელის მსჯელობა პოლიტიკის შესახებ, მცდელობა პოლიტიკის გადმოცემისა რეალურად, როგორც ეს ხდებოდა და, ასევე, წინასწარმეტყველება (რაც შპენგლერის აზროვნებისთვის დამახასიათებელია) იმისა, რაც მოხდება ან უნდა მოხდეს ამ მიმართულებით, - ესაა ამ წიგნის ამოცანა."
  },
  {
    id: 2,
    title: "შვიდი მომაკვდინებელი გრძნობა",
    img: "https://saba.com.ge/content/images/book/b/4ecd1a5a199641ab836e99dc02ee05b8.png",
    characters: ["character 1", "character 2", "character 3", "character 4"],
    description: "ამბავი იან კლაინზეა, უცნაურ მხატვარზე, რომლისთვისაც ყოველი დღე ერთნაირად უიმედოა; ფილოსოფიაც თავისებური აქვს - ფერების ფილოსოფია; მეგობრებიც ჰყავს, თუმცა მაინც მარტოსულია"
  },
  {
    id: 3,
    title: "მეს გამოღვიძება",
    img: "https://saba.com.ge/content/images/book/b/0d36be4fd8f6407c80b4acd206c69bd6.png",
    characters: ["character 1", "character 2", "character 3", "character 4"],
    description: 'ეს არის წიგნი, რომელიც გვიხატავს სურათს, თუ როგორ ახერხებს თავად ავტორი საკუთარი ჭეშმარიტი "მეს“ გამოღვიძებას უამრავი ტანჯვის გავლით, როგორ იწვევს მკითხველს, რომ მასაც გაუჩნდეს ამის სურვილი და როგორ შემოდის "გამოღვიძება“ საბოლოოდ მატერიაში!'
  },
  {
    id: 4,
    title: "შუაღამის ბიბლიოთეკა",
    img: "https://saba.com.ge/content/images/book/b/231580df2d7e49049f051d163ff7c3a2.png",
    characters: ["character 1", "character 2", "character 3", "character 4"],
    description: 'ჩამაფიქრებელი წიგნია, რომელიც ამტკიცებს, რომ მცირე სიკეთესაც დიდი შედეგი შეიძლება ჰქონდეს.'
  }
]


class App extends Component {
  render() {
    return (
      <div className='card-container'>
        {
          data.map((book) => {
            return <Card key={book.id} title = {book.title} description = {book.description} img = {book.img} characters = {book.characters} />
          })
        }
      </div>
    )
  }
}

export default App