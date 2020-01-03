export const jenkinsValues = {
    jenkinsUser:"alaa",
    jenkinsPassword:"Mba5922949822;",
    disableInitialization:"no"

}
export const nexusValues = {
    nexus:{
        service:{
            type:'LoadBalancer',
        }
    },
    nexusProxy:{
        env:{
            nexusDockerHost:"localhost:8081",
            nexusHttpHost:"localhost:8081"
        }
    }
}

export const sonarQube = {
    service:{
        type:'LoadBalancer'
    },
    // persistence:{
    //     enabled:true,
    //     storageClass:{
    //         size:'4Gi'
    //     }
    // }
}