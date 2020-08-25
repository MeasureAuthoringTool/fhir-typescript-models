/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  IOperationOutcome,
  OperationOutcomeIssue,
} from "../internal";

export class OperationOutcome extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationOutcome";

  public issue?: Array<OperationOutcomeIssue>;

  public static parse(
    json: IOperationOutcome,
    providedInstance: OperationOutcome = new OperationOutcome()
  ): OperationOutcome {
    const newInstance: OperationOutcome = DomainResource.parse(json, providedInstance);
  
    if (json.issue !== undefined) {
      newInstance.issue = json.issue.map((x) => OperationOutcomeIssue.parse(x));
    }
    return newInstance;
  }

  public static isOperationOutcome(input?: unknown): input is OperationOutcome {
    const castInput = input as OperationOutcome;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationOutcome";
  }

  public toJSON(): IOperationOutcome {
    const result: IOperationOutcome = super.toJSON();

    if (this.issue) {
      result.issue = this.issue.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): OperationOutcome {
    return OperationOutcome.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationOutcome";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
