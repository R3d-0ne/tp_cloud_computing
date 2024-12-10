const pulumi = require("@pulumi/pulumi")
const oci = require("@pulumi/oci")

const env = pulumi.getStack();
console.log("Target environment", env)

const compartmentName = [env,"pulumi", "tp"].join("-")
const freeformTags = {
	"createdBy": "Pulumi",
	"environment": env,
	"createdOn": new Date().toISOString(),
	"repostiory": "https://github.com/R3d-0ne/tp_cloud_computing.git"
}

const compartment = new oci.identity.Compartment(compartmentName, {
	name: compartmentName,
	description: "Compartment for Pulumi resources",
	enableDelete: true,
	FreeformTags: freeformTags

})

exports.compartmentId = compartment.id
