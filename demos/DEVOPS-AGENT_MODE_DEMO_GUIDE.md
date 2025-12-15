
# DEVOPS - AGENT MODE DEMO

We have a sample web app in "https://github.com/boq-ghcp-demos/travel-agent-demo-app" and want to do a simple deployment to Azure App Service.

## PART 1 - Provisioning the infrastructure using Bicep


Please generate a Bicep template that creates:
- Follow Azure naming rules, derive from the repo name and Chooses sensible environment-specific names for DEV, PREPROD and PROD and Resource groups
- An App Service Plan (Linux)
- Check the Repo to find out the specific tech stack used for this app
- Pick East US region and S1 tier Web Application


  
## PART 2 - Creating a CI/CD pipeline in ADO with different stages such as DEV, PREPROD and PROD

### Step 1 — Scaffold multi-stage pipeline

**Pre-requisits:**


Create a Service Connection in Azure Devops - [Visit here for instructions](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops)


**Grant permissions via Azure Portal**

Note: The service principal can't grant itself permissions. I'll remove the role assignment step from the pipeline and provide you with commands to grant the permission manually.
- Go to Azure Portal → Resource Group `rg-travel-agent-demo-dev`
- Click Access control (IAM) → Add role assignment
- Select  Contributor role
- Click Next → Select User, group, or service principal
- Search for your service principal (might be named "GHCP-Training" or the object ID)
- Click Review + assign


#### Grant Contributor on DEV
az role assignment create `
  --assignee 827ff01c-8c15-4f10-8046-cf0de0fde848 `
  --assignee-principal-type ServicePrincipal `
  --role "Contributor" `
  --scope "/subscriptions/7f4145d3-20d6-41d6-a06f-cde273a72575/resourceGroups/rg-travel-agent-demo-dev"

#### Grant Contributor on PREPROD
az role assignment create `
  --assignee 827ff01c-8c15-4f10-8046-cf0de0fde848 `
  --assignee-principal-type ServicePrincipal `
  --role "Contributor" `
  --scope "/subscriptions/7f4145d3-20d6-41d6-a06f-cde273a72575/resourceGroups/rg-travel-agent-demo-preprod"

#### Grant Contributor on PROD
az role assignment create `
  --assignee 827ff01c-8c15-4f10-8046-cf0de0fde848 `
  --assignee-principal-type ServicePrincipal `
  --role "Contributor" `
  --scope "/subscriptions/7f4145d3-20d6-41d6-a06f-cde273a72575/resourceGroups/rg-travel-agent-demo-prod"

  

**GHCP Pprompt**
<br/>
Create an Azure DevOps multi-stage YAML pipeline for this Node.js app that:

- Uses an Azure Resource Manager service connection (you choose and reference the name)
- Follows Azure naming rules, derives from the repo name and Chooses sensible environment-specific names for DEV, PREPROD and PROD and writes them into the YAML for App Service (web app) names and Resource groups
- Creates related resource group for each environment using the naming instruction given to you.
- Grant required permissions to the service conncion given to you as website contributor to each then using the bicep file you created earlier,then froceed with deploying the app and rest of the steps. 
- Deploys the web app located in "https://github.com/boq-ghcp-demos/travel-agent-demo-app" to Azure App Service all the three environments
- Publishes build output using the most reliable approach for multi-stage deployment and update the pipeline accordingly
- Configures manual approval before the PROD stage via Azure DevOps Environments.
- Considers the Previous bicep file will be uploaded next to the pipeline repo at the repo root.
Save the pipeline as `azure-pipelines.yml` at the repo root and show the FULL YAML with the names you selected.

### Step 2 - Create a ADO pipeline with YAML and upload `azure-pipelines.yml`  

### Step 3 - Go to the Repos and upload `main.bicep` to the repo
