<template>
    <div id="videocontainer">
        MJPEG<br>
        <img :src="srcurl" /><br/>
        <!-- WEBM/MP4<br/>
        <video controls autoplay>
            <source src="http://localhost:50005/live.webm" type='video/webm; codecs="h264"' />
        </video> -->
    </div>
</template>

<script>
    export default {
        props: {
            srcurl: {
                type: String,
                //CHANGEME: hier (vorerst) lokale IP-Adresse des Pi eintragen!
                default: "http://172.21.13.218:8080/stream.mjpg" //wenn in IoT Wlan hier IP eintragen
            }
        }
    }
</script>

<style>

</style>