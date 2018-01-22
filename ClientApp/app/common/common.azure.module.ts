import { NgModule } from "@angular/core";
import { CognitiveService } from "./services/cognitive.service";
import { UserService } from './services/user.service';
import { AzureHttpClient } from "./services/azureHttpClient";
@NgModule({
  providers: [AzureHttpClient, CognitiveService, UserService]
})
export class CommonAzureModule {}
