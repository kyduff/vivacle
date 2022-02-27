from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw

percentile_list = ['10', '5', '1', '0.5', '0.1', '0.01']

artist = ['ed', 'Ed Sheeran', '.jpeg']

for x in range(len(percentile_list)):
    img = Image.open("frame.png")
    topImg = Image.open(artist[0] + artist[2])
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("futura.otf", 65)
    W,H = img.size
    topImg = topImg.resize((550,550), Image.ANTIALIAS)
    topW,topH = topImg.size
    msg = percentile_list[x] + "% of " + artist[1] + " Listeners"
    w,h = font.getsize(msg)
    draw.text(((W-w)/2,260),msg,(255,255,255), font=font)
    offset = ((W - topW) // 2, (H - topH) // 2)
    img.paste(topImg, (int((W-topW)/2) , 400))
    img.save('images/' + artist[0] + str(x) + '.png')
