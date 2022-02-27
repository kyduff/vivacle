from api import models
from django.db.models import Q
brand = models.Brand.objects.get(name="spotify")
frequency = ['10', '5', '1', '0.5', '0.1', '0.01']
artists = [['kanye', 'Kayne West'], ['beatles', 'The Beatles'], ['billie', 'Billie Eilish'], ['dua', 'Dua Lipa'], ['ed', 'Ed Sheeran'], ['jayz', 'Jay Z'], ['taylor', 'Taylor Swift']]



for x in range(6, 48):
  if len(str(x)) == 1:
    index = "0" + str(x)
  else:
    index = str(x)
  tokenId = "00000000000000000000000000000000000000000000000000000000000000" + index
  token = models.Token.objects.get(Q(brand = brand) & Q(tokenId = "00000000000000000000000000000000000000000000000000000000000000" + index))
  artist_index = int(x/6) - 1
  art = artists[artist_index]
  frequency_index = x % 6
  freq = frequency[frequency_index]
  name = art[1] + " " +freq + "% Listener"
  description = "You were in the " + freq + "% of " + art[1] + " listeners this year. Amazing!"
  base_url = "https://github.com/kopy-kat/spotify_images/blob/main/"
  url = base_url + art[0] + str(frequency_index) + ".png"
  json = {"name": name, "image_url": url, "description": description}
  models.MetaData.objects.create(token= token, json = json)
