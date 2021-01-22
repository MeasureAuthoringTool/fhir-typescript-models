/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  FhirList,
  IOperationOutcome,
  IssueType,
  OperationOutcomeIssue,
  FhirType
} from "../internal";

@FhirType("OperationOutcome", "DomainResource")
export class OperationOutcome extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationOutcome";

  static readonly primaryCodePath: string | null = "issue.code";

  @FhirList("OperationOutcomeIssue")
  public issue?: Array<OperationOutcomeIssue>;

  get primaryCode(): IssueType | undefined {
    return this?.issue?.[0]?.code;
  }

  set primaryCode(primaryCode: IssueType | undefined) {
    this.issue = this.issue || [new OperationOutcomeIssue()];
    this.issue[0].code = primaryCode;
  }

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
