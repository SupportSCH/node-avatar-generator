path = require('path')
base = path.normalize(require('process').cwd()+path.sep+".."+path.sep+"fonts"+path.sep)

var helvetica = function(page){
		font_x = page * 0.60
		font_y = page 
		this.fontsize = page
		this.offset = {
			x : Number.parseInt(page/2-font_x/2),
			y : Number.parseInt(page/2+font_y/2-page*0.14)
		}
		this.file = base+"Bariol_Light.otf"
	}

var lihei = function(page){
		font_x = page
		font_y = page 
		this.fontsize = page * 0.8
		this.offset = {
			x : Number.parseInt(page/2-font_x/2),
			y : Number.parseInt(page/2+font_y/2-page*0.14)
		}
		this.file = base+"LiHei Pro.ttf"
	}


exports.helvetica = helvetica
exports.lihei = lihei 