export const jenkinsValues = {
    jenkinsUser:"alaa",
    jenkinsPassword:"Mba5922949822;",
    disableInitialization:"no",
    livenessProbe:{
        enabled:false
    },
    readinessProbe:{
        enabled:false
    },
    persistence:{
        existingClaim:"pvc-jenkins"
    }
}
export const nexusValues = {
    // nexus:{
    //     service:{
    //         type:'LoadBalancer',
    //     }
    // },
    // nexusProxy:{
    //     env:{
    //         nexusDockerHost:"localhost",
    //         nexusHttpHost:"localhost"
    //     }
    // }
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