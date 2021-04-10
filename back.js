var vetor = ['https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg' , 'https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg']

var nomeFilme = ["Toy Story" , "Monsters,SA"]
var Link = ["https://topflix.tv/filmes/assistir-online-toy-story/", "https://topflix.tv/filmes/assistir-online-monstros-s-a/"]

for (i = 0; i < vetor.length;i ++) {
  document.write("<img src =" + vetor[i] + ">")
  document.write("<h3>" + nomeFilme[i] + "</h3>")
  document.write("<a href=" + Link[i] + "><button>Link do Filme</button></a><br></br>")

  
}


