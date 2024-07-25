//coding golf exists to code a solution to a problem in the fewest characters possible.

r=readline
i = r().split(' ')
X=+i[0]
Y=+i[1]
x=i[2]
y=i[3] 
while(true){T=+r()
o=''
if(Y!=y){if(Y>y){o+="S";y++}else{o+="N";y--}}if(X!=x){if(X> x){o+="E";x++}else{o+="W";x--}}print(o)}
