const contacts = [
  {
    name: "JavaScript",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ekr0y50dzU1IBDEKnrOqBaRf-LJf0XG_rRkqEl_i0YSuhaRZiXbmi0tizCor_cSqWCQ&usqp=CAU",
    phone: "65.36%",
    email: "46,443",
  },
  {
    name: "HTML/CSS",
    imgURL:
      "https://tl.vhv.rs/dpng/s/479-4793148_thumb-image-html-and-css-logos-hd-png.png",
    phone: "55.08%",
    email: "39,142",
  },
  {
    name: "SQL",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-PVn6qnaOTqF4Hlf8fZmuTktJKf44pqL2ADNZeG3DQ&s",
    phone: "49.43%",
    email: "35,127",
  },
  {
    name: "Python",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGsHD3Es3LoEjFpNd1vmJp1y_ESB_LSMqcKSCSR9i5Q&s",
    phone: "48.07%",
    email: "34,155",
  },
  {
    name: "TypeScript",
    imgURL: "https://cdn-icons-png.freepik.com/512/5968/5968381.png",
    phone: "34.83%",
    email: "24,752",
  },
  {
    name: "Java",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNaJk-LZ4zQRO4GdmFizYFwTR8LX1DRzOgGkMc9rB1A&s",
    phone: "33.27%",
    email: "23,644",
  },
  {
    name: "Bash/Shell",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfciayL8Z_uODUu9EvIsZmCwCdEWewv7BtinnUhRmxg&s",
    phone: "29.07%",
    email: "20,656",
  },
  {
    name: "C#",
    imgURL:
      "https://p7.hiclipart.com/preview/520/669/92/c-programming-language-computer-icons-computer-programming-programming.jpg",
    phone: "27.98%",
    email: "19,883",
  },
  {
    name: "C++",
    imgURL:
      "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    phone: "22.55%",
    email: "16,024",
  },
  {
    name: "PHP",
    imgURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX////t7e3u7u6Kk74jJTHr6+scHSeLlMF6g6gXFyFgZ4aNl8MeICqIkb1PVW6EjbuRmsdsdZeBi7v08/EjJTIaGyQUFR0jJjBob5D5+vyRmsO1u9Z0fKBYXHe2u9Lf4e3Gytrm6PCkq8zU1+YqLzw+QlYaHCKFjradpMhRV3EbHCk3OkvX2uLY2+nV2ODg4eUNDRO4vtlFSV/EyNoAAAAvNENHTGU/RlgUFxuqsc88PlVSV3OVnsImLplBAAAMp0lEQVR4nO1cC3uqOBOuoKIGGoSCitZ6adVztPWcuu3Wb/v/f9cHgmSiSeRavDC7zz6zNcK8zmTmzSRwd+dJRZKkypVqd2diR4mwRHgSoSu1K9V2qg+2dqWaVHgY5atJJcKL1yQwJWtXqQUJ9TyMyUfz5TwCKtd6WLgdJcLUCAtnHvlpJae5eO0WKv71IyRTsvjiXHKaRJov5xFQudbDwu0oEaZGWDjzyE8rOc3Fa7dQ8a8fIZmSxRfnktMk0nw5j4DKtR4WbkeJMDXCwplHflrJaS5eu4WKf/0IyZQsvjiXnCaR5st5BFSu9bBwO0qEqREWzjzy00pOc/HaLVT860dIpmTxxbnkNIk0X84joHKth4XbUSJMjbBw5pGfVnKai9duoeJfP0IyJYsvziWnSaT5ch4BlWs9LNyOEmFqhIUzj/y0ktNcvHYLFf/6EZIp+RPcQtrdc3f3H71vjjeRTPcfT+mt16u3tydP3t5W63XP+6NpmgHgC+Q0pumiGj+Nhv3JwtGw4f1jeP91ZacYWHMWk+1w9DTueVgvq+JL6+lwu9BcFFjTNFl2/2WI94GmeYC1xXY4XUuXgND13HjUd1xX7ZBFFg+pgZ3+dJy5NwOEmbAHszbtO57bYkA7AOqG8Hd/tDYztCojTiOZtVFKdMSd2HC2o5oppbYqQ04z3nxnAQ7AxHgxlFJalVHFl1x4rvOyhBeA1Azn7zgD+9JdwRwPXXiZo9sLxs5wbZrFcRpptMgRni+asRilIQXJOY1kroeaET04FSAxMWKtvzaln+Y05mpixKh4SqMdSiMewB1IY7IyE1qaEOF4EcN9ruhL2wrkzyCmD32MePH0gwjHi7izT69X92LLSRB6qXUx/hlOY0qTeP7zZG6HCB/0JAB3II3J2PwBTvM3Pj5Zac/2ANV3lBShh7Efw9IEnMbN2lMtSXlAj2GU1lspEHoVcppnxTd7CQJ0h/BF3SOctRNNQ4Bx0YvnlRijzVFCcqbpIcBqc54OoOfGUYwFVgxOI0nbxPwFk0RTTZxoQtHwRIpMAGJwmp6TGCBqW2Gi+TfVNNxjdHqRXXMXdQqOMacXEQUhSDSPWSB03fhkZlvxzRErxWgU2+TTTpBo6m3+wGgXC8TYRJyM0RCaQ4N5mwZT5khHlGUg0VgD7rg5+2qyfnC14OcwhmZ2nIYHUP6nyRK7+XzflUFGAYymatHj2ggpfnSgzz/Mi9nqS6uhM2LbhZgZp9lwAA6aVY6os+Y93lulkERDS+fBHfcr4Kn6R4d3sXrzo81IwcYmI04jvXIAoladY9POLrulRxlXtwbeT6EgWzCo2lzOj91oTE+nmygVf8WrEuhTFRnVsQIKChINU/7sIDY4jg5EnTUYEFdZIKzwqoSiPz8Ijapanzsv6lVe/AViuzwHdUWO3o86EA3X0nMac8JfygvjypOvrve7z+0Tv4R6j2TlXuxod9TH8VzUFmZqTjPlMhllII6rnVVIkGiINJGbaE5ezOoex6m31EjJaThZRqYTiFoP5MARM9cohTWOGtixGzJMNMxBrjwzEirupaz4fT5VA4lG/dUK5L+lrYKYVF90Gb2Tcff7ca3H5xkZ5qbTRlh5Oh/hoHd1BqewzWhiaf1UCKUe34Wy/kxuPVfQThRF134Bb3QsN/4ewDgUjEOK/gmZDuoScv6fHoxykN7uAD/WGWGqGb00nMYUuBAmGgveWe8CiHZD0cj//gZhpgyIE+25ThINNd2QTH5HN1QY1Ebri3s3JzgNFizIAaOhs5z+L+UdMG4JLSQIO3UdkUQzG8CLKeDr6gtrYYJ7POsjcBp+IqUKmPpJ3Vlpk9RitUFCUuHSCXWJD5c6IjgOugC6Gk5FdclEOBVONDHChSBIEYmrw+4SKCNWWyeJxoI9GvQLJCrUsAkOOmMCvspGqC1SIBTkGZhoLLq7BGeYixAmGvgLLcO/17sOYDQHMMB92FEqGz0hQhGneRL1LRD51Q/4FCRgzYb8FY6DiUbWrfDvs4FOOZRGaIU/0cFs2At+YlofgdOYQ0GQKg0wc+gbg6ZFx56TkFWXECFYNDY1HTqUzm6gi8VpgWhDKSGnMbcihMBRB4RRJ2sJN0tyEo0MuZyOwMwd0PcB42aMeugh3IpW+0KEERPNYSpVmoSIvFCJBn6fONolPg3iKFujfIgeSelhcRp5R7+TInQECAFTPkilCP7qLZ2gpaYrcLT6qBNG0zlIpQ7ggL8dNkInAkImKzAdQb1XyDQ8SKX6kvrVwTSiEg0xvN7VgaOoyUrlZfWebY+LMCmn+Rb4sAE5F/wADb6I8R86qI1UGYCJpgESzUEqBbWiatMzlIjDtD4Kp1nwAVIVAdqkzAkH8VIDJ9EA3zzYbkUADqU47j1Y+bMWT57sSn6yii/YqACJhkqlaN4B650HBJZYNKMBi8YHHTAayEqRfg+WWNxdK22bGOGGH6Ug0aifetCdRvr8EXY2mm0Z9HJoRgMWly8OSTQuKw2a3chdOj0DD7KaGL7gv0KEQk4jWOADxv8YdKfbj8smXJV7FR4unajwewbfh4lGDVrfg9anSnU/3HUYD+Er0/oofZoxv0cDGE21HrSn6wfdMst1B4fRKDDFdmH2rdp+q9s6aGHM+HvHRi0pp3ELIhfhyd5ftfqn4YYaj9GAFDtr6KcvVn/n2iI7wj0aMUIuMQVLH57YbURNNzrRUKl4frItabFXFTvBw+QIpTVvIp7u/dm7RjaZbg9UooHd0We9PWNdAQIUHeDA6zR9Gl69QNw9GV/qVb8Hr4Te6dCMBqTid5hoGNJ5+HoUbI1rk1R9mhXbiUpDGFeqvScmoK5TcQbWEvUWlWiOxXpm7FgQMVZc66PsPZkT5kxUuoK4mtmf+30i2MuhGE2DMDurLUg0D+rsmb1k2gteiI/0ndyZYc9EmGjqlFj2R2sexhT6bO4/+IILW6X7FX7jTwMkGvXgYur9QBefv8EnHmI4iZC9/Qt6LFYLSncgw+1a1CUfUfR8AL5DndSgrtaes/Z+aYDDEyeII+w9seoQmEaqQ04VePvtChXW7p/2n8nsv7ufkLWw1SZ/9zrjJ+C54oiKfcTzNBLDiSTReBsTKQX9Lwx5ziKeL4Z0wvq9CDv/x21hhZNAkon+e3+xjhXzYoawGRxt78mTo6kIeidWOzVCkmjYHV++4H4E66MgPKr7YEkeO66OBDTTmDsvAoCTKGe/A4RCVlAxJzREFMZVNW5cHQs8EiYufUcApQzPCG+pQAVN2mX6RPMSXmwWJyDw9oTNMc8I9wFEBe5mpvahQ/o6zRhf889DiwM06nmao3QDEg2nCx1HMDmpwWs1sQAOI9gcD6E5DU8nAkYTK67YAhLNe+QD0sZb1AdMYpwRNtf7I7R6U92LzV95RxT0GF7NjnrIHaN1HmeE77wHEXY3mH/e7yVeemcibIUXu48YELgfw+ZATjvb16a781HBuYudpAXoQox5MU17i2VzPISS1E/2OEJ2gvtSvGe+4yGsSGQ2FiEadlbRTgbH5DRQk8xXpSCMmiG/uvhyf+7JDdVNto81R8SHtY2U5PnuqPWQClVpk+jxp3T4hlLcAI1X8Q+/N0U/6Ec3Pkd3UR+wyAahp70u4jwnmwKehhevCeyLzWkY2rof51nnhPgw7q8S2hef0zC010kebxsIRJExnoi2zrLnNCyt5j2UnwdIDRuLUS21fekRVkyzNtp672tJ+egkhU4zsPf2j1SvU8gM4W463z39/c7Kld7LTTZPXuGtpLIqIacRaLVp/3v3VqHk4LDmvQrjLb0tqTiNWFttto6R4EU13tuUsLPdnNpJiq8lr4ec5YfpTp7x9O82eJWS0KOa9/okH9tkMx1XvHd/ZWhL2oovnJYe1vWb96avbzl4wxfGPmIPEvZf+YXl70l/OHoL9o/ysSWPq4ba/k1I69Xq7XU63WyGnmw20+nr9PVp7U+UZGzsZzhNVK1SCf0qQa2S4T1y4zTnr/mSR3ici1YivHwtQJgJezhPrXyP8MVrt/CW3etHSKZk8cW55DSJNF/OI6ByrYeF21EiTI2wcOaRn1ZymovXbqHiXz9CMiWLL84lp0mk+XIeAZVrPSzcjhJhaoSFM4/8tJLTXLx2CxX/+hGSKVl8cS45TSLNl/MIqFzrYeF2lAhTIyyceeSnlZzm4rVbqPjXj5BMyeKLc8lpEmm+nEdA5VoPC7ejRJgaYeHMIz+t5DQXr91Cxb9+hGRKFl+cS06TSPPlPAIq13pYuB0lwtQIC2ce+Wklp7l47RYq/vUjJFOy+OJccppEmi/nEVC51sPC7SgRpkVIEur1af8HTTe4/FIXo3QAAAAASUVORK5CYII=",
    phone: "20.87%",
    email: "14,827",
  },
  {
    name: "C",
    imgURL:
      "https://toppng.com/uploads/preview/c-programming-icon-c-programming-language-logo-11562945679duaxtn3yq0.png",
    phone: "19.27%",
    email: "13,692",
  },
];

export default contacts;
