/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IOperationOutcomeIssue,
  IssueSeverity,
  IssueType,
  PrimitiveString,
} from "../internal";

export class OperationOutcomeIssue extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationOutcome.Issue";

  public severity?: IssueSeverity;

  public code?: IssueType;

  public details?: CodeableConcept;

  public diagnostics?: PrimitiveString;

  public location?: Array<PrimitiveString>;

  public expression?: Array<PrimitiveString>;

  public static parse(
    json: IOperationOutcomeIssue,
    providedInstance: OperationOutcomeIssue = new OperationOutcomeIssue()
  ): OperationOutcomeIssue {
    const newInstance: OperationOutcomeIssue = BackboneElement.parse(json, providedInstance);
  
    if (json.severity) {
      newInstance.severity = IssueSeverity.parsePrimitive(json.severity, json._severity);
    }
    if (json.code) {
      newInstance.code = IssueType.parsePrimitive(json.code, json._code);
    }
    if (json.details) {
      newInstance.details = CodeableConcept.parse(json.details);
    }
    if (json.diagnostics) {
      newInstance.diagnostics = PrimitiveString.parsePrimitive(json.diagnostics, json._diagnostics);
    }
    if (json.location) {
      newInstance.location = json.location.map((x, i) => {
        const ext = json._location && json._location[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.expression) {
      newInstance.expression = json.expression.map((x, i) => {
        const ext = json._expression && json._expression[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isOperationOutcomeIssue(input?: unknown): input is OperationOutcomeIssue {
    const castInput = input as OperationOutcomeIssue;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationOutcomeIssue";
  }

  public toJSON(): IOperationOutcomeIssue {
    const result: IOperationOutcomeIssue = super.toJSON();

    if (this.severity) {
      result.severity = this.severity.value;
      result._severity = Extension.serializePrimitiveExtension(this.severity);
    }

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.details) {
      result.details = this.details.toJSON();
    }

    if (this.diagnostics) {
      result.diagnostics = this.diagnostics.value;
      result._diagnostics = Extension.serializePrimitiveExtension(this.diagnostics);
    }

    if (this.location) {
      result.location = this.location.filter(x => !!x).map(x => x.value) as typeof result.location;
      result._location = Extension.serializePrimitiveExtensionArray(this.location);
    }

    if (this.expression) {
      result.expression = this.expression.filter(x => !!x).map(x => x.value) as typeof result.expression;
      result._expression = Extension.serializePrimitiveExtensionArray(this.expression);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "OperationOutcomeIssue";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
