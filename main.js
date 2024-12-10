const pulumi = require("@pulumi/pulumi")
const oci = require("@pulumi/oci")

const env = pulumi.getStack();
console.log("Target environment", env)

const compartmentName = [env,"pulumi", "tp"].join("-")
const freeformTags = {
	"createdBy": "Pulumi",
	"environment": env,
	"createdOn": new Date().toISOString(),
	"repostiory": "
}

const compartment = new oci.identity.Compartment(compartmentName, {
	name: compartmentName,
	description: "Compartment for Pulumi resources",
	enableDelete: true,
	FreeformTags: {

	}

})

exports.compartmentId = compartment.id
