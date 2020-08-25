/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CarePlanActivityKind,
  CarePlanActivityStatus,
  CodeableConcept,
  Extension,
  ICarePlanActivityDetail,
  Period,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  SimpleQuantity,
  Timing,
} from "../internal";

export class CarePlanActivityDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CarePlan.Activity.Detail";

  public kind?: CarePlanActivityKind;

  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  public instantiatesUri?: Array<PrimitiveUri>;

  public code?: CodeableConcept;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public goal?: Array<Reference>;

  public status?: CarePlanActivityStatus;

  public statusReason?: CodeableConcept;

  public doNotPerform?: PrimitiveBoolean;

  public scheduled?: Timing | Period | PrimitiveString;

  public location?: Reference;

  public performer?: Array<Reference>;

  public product?: CodeableConcept | Reference;

  public dailyAmount?: SimpleQuantity;

  public quantity?: SimpleQuantity;

  public description?: PrimitiveString;

  public static parse(
    json: ICarePlanActivityDetail,
    providedInstance: CarePlanActivityDetail = new CarePlanActivityDetail()
  ): CarePlanActivityDetail {
    const newInstance: CarePlanActivityDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.kind) {
      newInstance.kind = CarePlanActivityKind.parsePrimitive(json.kind, json._kind);
    }
    if (json.instantiatesCanonical) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => {
        const ext = json._instantiatesCanonical && json._instantiatesCanonical[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.instantiatesUri) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => {
        const ext = json._instantiatesUri && json._instantiatesUri[i];
        return PrimitiveUri.parsePrimitive(x, ext);
      });
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.goal) {
      newInstance.goal = json.goal.map((x) => Reference.parse(x));
    }
    if (json.status) {
      newInstance.status = CarePlanActivityStatus.parsePrimitive(json.status, json._status);
    }
    if (json.statusReason) {
      newInstance.statusReason = CodeableConcept.parse(json.statusReason);
    }
    if (json.doNotPerform) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.scheduledTiming) {
      newInstance.scheduled = Timing.parse(json.scheduledTiming);
    }
    if (json.scheduledPeriod) {
      newInstance.scheduled = Period.parse(json.scheduledPeriod);
    }
    if (json.scheduledString) {
      newInstance.scheduled = PrimitiveString.parsePrimitive(json.scheduledString, json._scheduledString);
    }
    if (json.location) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.productCodeableConcept) {
      newInstance.product = CodeableConcept.parse(json.productCodeableConcept);
    }
    if (json.productReference) {
      newInstance.product = Reference.parse(json.productReference);
    }
    if (json.dailyAmount) {
      newInstance.dailyAmount = SimpleQuantity.parse(json.dailyAmount);
    }
    if (json.quantity) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.description) {
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
  
  public getTypeName(): string {
    return "CarePlanActivityDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
