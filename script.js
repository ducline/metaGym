const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()

        /*carousel slider*/
        let count = 1

        document.getElementById("radio1").checked = true

        setInterval(() => {
            nextImg()
        }, 5000)

        const nextImg = () => {
            count++

            if (count > 3) {
                count = 1
            }

            document.getElementById("radio"+ count).checked = true
        }
    },
    cacheSelectors: function(){
        this.$CoverBasic = document.querySelector('#CoverBasic')
        this.$CoverMid = document.querySelector('#CoverMid')
        this.$CoverBodyBuilder = document.querySelector('#CoverBodyBuilder')
        this.$ButBasic = document.querySelector('#ButBasic')
        this.$ButSaude = document.querySelector('#ButMid')
        this.$ButBodybuilder = document.querySelector('#ButHigh')
        this.$ButBasicText = document.querySelector('#ButBasicText')
        this.$ButSaudeText = document.querySelector('#ButMidText')
        this.$ButBodyBuilderText = document.querySelector('#ButHighText')
    },
    bindEvents: function(){
        this.$CoverBasic.onmouseover = this.Events.CoverBasic_Hover
        this.$CoverBasic.onmouseout = this.Events.CoverBasic_OutHover
        this.$CoverMid.onmouseover = this.Events.CoverMid_Hover
        this.$CoverMid.onmouseout = this.Events.CoverMid_OutHover
        this.$CoverBodyBuilder.onmouseover = this.Events.CoverBodyBuilder_Hover
        this.$CoverBodyBuilder.onmouseout = this.Events.CoverBodyBuilder_OutHover
        this.$ButBasic.onmouseover = this.Events.butBasic_Hover
        this.$ButBasic.onmouseout = this.Events.butBasic_OutHover
        this.$ButSaude.onmouseover = this.Events.butSaude_Hover
        this.$ButSaude.onmouseout = this.Events.butSaude_OutHover
        this.$ButBodybuilder.onmouseover = this.Events.butBodyBuilder_Hover
        this.$ButBodybuilder.onmouseout = this.Events.butBodyBuilder_OutHover
    }, 
    Events:{

        CoverBasic_Hover: function(){
            Main.$CoverBasic.classList.add('Hider')
        },
        CoverBasic_OutHover: function(){
            Main.$CoverBasic.classList.remove('Hider')
        },
        CoverMid_Hover: function(){
            Main.$CoverMid.classList.add('Hider')
        },
        CoverMid_OutHover: function(){
            Main.$CoverMid.classList.remove('Hider')
        },
        CoverBodyBuilder_Hover: function(){
            Main.$CoverBodyBuilder.classList.add('Hider')
        },
        CoverBodyBuilder_OutHover: function(){
            Main.$CoverBodyBuilder.classList.remove('Hider')
        },

        butBasic_Hover: function(){
            Main.$ButBasicText.innerText = 'ADERE JÁ'
        },
        butBasic_OutHover: function(){
            Main.$ButBasicText.innerText = 'PLANO BÁSICO'
        },
        butSaude_Hover: function(){
            Main.$ButSaudeText.innerText = 'ADERE JÁ'
        },
        butSaude_OutHover: function(){
            Main.$ButSaudeText.innerText = 'PLANO SAÚDE'
        },
        butBodyBuilder_Hover: function(){
            Main.$ButBodyBuilderText.innerText = 'ADERE JÁ'
        },
        butBodyBuilder_OutHover: function(){
            Main.$ButBodyBuilderText.innerText = 'PLANO BODYBUILDER'
        }
    }
     
}

Main.init()