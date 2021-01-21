/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CarePlanActivityKind,
  CarePlanActivityStatus,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  ICarePlanActivityDetail,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  SimpleQuantity,
  Timing,
  FhirType
} from "../internal";

@FhirType("CarePlanActivityDetail", "BackboneElement")
export class CarePlanActivityDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlan.Activity.Detail";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CarePlanActivityKind")
  public kind?: CarePlanActivityKind;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("Reference")
  public goal?: Array<Reference>;

  @FhirField("CarePlanActivityStatus")
  public status?: CarePlanActivityStatus;

  @FhirField("CodeableConcept")
  public statusReason?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirChoice("Timing", "Period", "PrimitiveString")
  public scheduled?: Timing | Period | PrimitiveString;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("Reference")
  public performer?: Array<Reference>;

  @FhirChoice("CodeableConcept", "Reference")
  public product?: CodeableConcept | Reference;

  @FhirField("SimpleQuantity")
  public dailyAmount?: SimpleQuantity;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  public static parse(
    json: ICarePlanActivityDetail,
    providedInstance: CarePlanActivityDetail = new CarePlanActivityDetail()
  ): CarePlanActivityDetail {
    const newInstance: CarePlanActivityDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.kind !== undefined) {
      newInstance.kind = CarePlanActivityKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._instantiatesCanonical?.[i]));
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiatesUri?.[i]));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.goal !== undefined) {
      newInstance.goal = json.goal.map((x) => Reference.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CarePlanActivityStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason !== undefined) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.scheduledTiming !== undefined) {
      newInstance.scheduled = Timing.parse(json.scheduledTiming);
    }
    if (json.scheduledPeriod !== undefined) {
      newInstance.scheduled = Period.parse(json.scheduledPeriod);
    }
    if (json.scheduledString !== undefined) {
      newInstance.scheduled = PrimitiveString.parsePrimitive(json.scheduledString, json._scheduledString);
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.productCodeableConcept !== undefined) {
      newInstance.product = CodeableConcept.parse(json.productCodeableConcept);
    }
    if (json.productReference !== undefined) {
      newInstance.product = Reference.parse(json.productReference);
    }
    if (json.dailyAmount !== undefined) {
      newInstance.dailyAmount = SimpleQuantity.parse(json.dailyAmount);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    return newInstance;
  }

  public static isCarePlanActivityDetail(input?: unknown): input is CarePlanActivityDetail {
    const castInput = input as CarePlanActivityDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CarePlanActivityDetail";
  }

  public toJSON(): ICarePlanActivityDetail {
    const result: ICarePlanActivityDetail = super.toJSON();

    if (this.kind) {
      result.kind = this.kind.value;
      result._kind = Extension.serializePrimitiveExtension(this.kind);
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.filter(x => !!x).map(x => x.value) as typeof result.instantiatesCanonical;
      result._instantiatesCanonical = Extension.serializePrimitiveExtensionArray(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.filter(x => !!x).map(x => x.value) as typeof result.instantiatesUri;
      result._instantiatesUri = Extension.serializePrimitiveExtensionArray(this.instantiatesUri);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.goal) {
      result.goal = this.goal.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.statusReason) {
      result.statusReason = this.statusReason.toJSON();
    }

    if (this.doNotPerform) {
      result.doNotPerform = this.doNotPerform.value;
      result._doNotPerform = Extension.serializePrimitiveExtension(this.doNotPerform);
    }

    if (this.scheduled && Timing.isTiming(this.scheduled)) {
      result.scheduledTiming = this.scheduled.toJSON();
    }

    if (this.scheduled && Period.isPeriod(this.scheduled)) {
      result.scheduledPeriod = this.scheduled.toJSON();
    }

    if (this.scheduled && PrimitiveString.isPrimitiveString(this.scheduled)) {
      result.scheduledString = this.scheduled.value;
      result._scheduledString = Extension.serializePrimitiveExtension(this.scheduled);
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.product && CodeableConcept.isCodeableConcept(this.product)) {
      result.productCodeableConcept = this.product.toJSON();
    }

    if (this.product && Reference.isReference(this.product)) {
      result.productReference = this.product.toJSON();
    }

    if (this.dailyAmount) {
      result.dailyAmount = this.dailyAmount.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    return result;
  }

  public clone(): CarePlanActivityDetail {
    return CarePlanActivityDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CarePlanActivityDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
