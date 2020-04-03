import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as helm from "@pulumi/kubernetes/helm";
import * as valueslist from './values';  
const __ = new pulumi.Config();
const release_name = __.require('release_name');
const repo = __.require('repo');
const chart_name = __.require('chart_name');
var deployed_service_name:string;
var values= {};

// Expose a K8s provider instance using our custom cluster instance.
const k8sProvider = new k8s.Provider("myprovider", {
    // kubeconfig: k8sCluster.kubeConfigRaw,
    kubeconfig: __.require('kubeConfig')
});
//For the endPoints and the values
if(chart_name=='jenkins'){
    deployed_service_name="jenkins";
    values = valueslist.jenkinsValues;
}
else if(chart_name=='sonarqube'){
    deployed_service_name='sonarqube-sonarqube';
    values=valueslist.sonarQube;
}
else if(chart_name=='sonatype-nexus') {
    deployed_service_name='nexus-sonatype-nexus';
    values=valueslist.nexusValues;
}
else{
    deployed_service_name="";
}
// const loadBalancer = 

//Values
const service  = new helm.v2.Chart(release_name,{
    repo:repo,
    chart:chart_name,
    values:values
    // version:"3.2.7"
},
{providers:{ kubernetes: k8sProvider}});

export let endPoint = service.getResource("v1/Service",deployed_service_name).status.loadBalancer.ingress[0].ip;
// export let jenkinsEndPoint = service.getResource("v1/Service","jenkins").status.loadBalancer.ingress[0].ip;
// export let nexusEndPoint = service.getResource("v1/Service","sonatype-nexus").status.loadBalancer.ingress[0].ip;
