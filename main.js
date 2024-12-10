const pulumi = require("@pulumi/pulumi")
const oci = require("@pulumi/oci")

const env = pulumi.getStack();
console.log("Target environment", env)

const compartmentName = [env,"pulumi", "tp"].join("-")
const freeformTags = {
	"CreatedBy": "Pulumi",
	"Environment": env,
	"CreatedOn": new Date().toISOString(),
	"Repostiory": "https://github.com/R3d-0ne/tp_cloud_computing.git"
}
console.log("Compartment name", compartmentName)
console.log(freeformTags)

const compartment = new oci.identity.Compartment(compartmentName, {
	name: compartmentName,
	description: "Compartment for Pulumi resources",
	enableDelete: true,
	FreeformTags: freeformTags

})
console.log("Compartment", compartment)

exports.compartmentId = compartment.id
