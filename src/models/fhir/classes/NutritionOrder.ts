/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  INutritionOrder,
  NutritiionOrderIntent,
  NutritionOrderEnteralFormula,
  NutritionOrderOralDiet,
  NutritionOrderStatus,
  NutritionOrderSupplement,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("NutritionOrder", "DomainResource")
export class NutritionOrder extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("PrimitiveCanonical")
  public instantiatesCanonical?: Array<PrimitiveCanonical>;

  @FhirList("PrimitiveUri")
  public instantiatesUri?: Array<PrimitiveUri>;

  @FhirList("PrimitiveUri")
  public instantiates?: Array<PrimitiveUri>;

  @FhirField("NutritionOrderStatus")
  public status?: NutritionOrderStatus;

  @FhirField("NutritiionOrderIntent")
  public intent?: NutritiionOrderIntent;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("Reference")
  public encounter?: Reference;

  @FhirField("PrimitiveDateTime")
  public dateTime?: PrimitiveDateTime;

  @FhirField("Reference")
  public orderer?: Reference;

  @FhirList("Reference")
  public allergyIntolerance?: Array<Reference>;

  @FhirList("CodeableConcept")
  public foodPreferenceModifier?: Array<CodeableConcept>;

  @FhirList("CodeableConcept")
  public excludeFoodModifier?: Array<CodeableConcept>;

  @FhirField("NutritionOrderOralDiet")
  public oralDiet?: NutritionOrderOralDiet;

  @FhirList("NutritionOrderSupplement")
  public supplement?: Array<NutritionOrderSupplement>;

  @FhirField("NutritionOrderEnteralFormula")
  public enteralFormula?: NutritionOrderEnteralFormula;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  public static parse(
    json: INutritionOrder,
    providedInstance: NutritionOrder = new NutritionOrder()
  ): NutritionOrder {
    const newInstance: NutritionOrder = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = json.instantiatesCanonical.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._instantiatesCanonical?.[i]));
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = json.instantiatesUri.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiatesUri?.[i]));
    }
    if (json.instantiates !== undefined) {
      newInstance.instantiates = json.instantiates.map((x, i) => PrimitiveUri.parsePrimitive(x, json._instantiates?.[i]));
    }
    if (json.status !== undefined) {
      newInstance.status = NutritionOrderStatus.parsePrimitive(json.status, json._status);
    }
    if (json.intent !== undefined) {
      newInstance.intent = NutritiionOrderIntent.parsePrimitive(json.intent, json._intent);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.dateTime !== undefined) {
      newInstance.dateTime = PrimitiveDateTime.parsePrimitive(json.dateTime, json._dateTime);
    }
    if (json.orderer !== undefined) {
      newInstance.orderer = Reference.parse(json.orderer);
    }
    if (json.allergyIntolerance !== undefined) {
      newInstance.allergyIntolerance = json.allergyIntolerance.map((x) => Reference.parse(x));
    }
    if (json.foodPreferenceModifier !== undefined) {
      newInstance.foodPreferenceModifier = json.foodPreferenceModifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.excludeFoodModifier !== undefined) {
      newInstance.excludeFoodModifier = json.excludeFoodModifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.oralDiet !== undefined) {
      newInstance.oralDiet = NutritionOrderOralDiet.parse(json.oralDiet);
    }
    if (json.supplement !== undefined) {
      newInstance.supplement = json.supplement.map((x) => NutritionOrderSupplement.parse(x));
    }
    if (json.enteralFormula !== undefined) {
      newInstance.enteralFormula = NutritionOrderEnteralFormula.parse(json.enteralFormula);
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isNutritionOrder(input?: unknown): input is NutritionOrder {
    const castInput = input as NutritionOrder;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrder";
  }

  public toJSON(): INutritionOrder {
    const result: INutritionOrder = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.filter(x => !!x).map(x => x.value) as typeof result.instantiatesCanonical;
      result._instantiatesCanonical = Extension.serializePrimitiveExtensionArray(this.instantiatesCanonical);
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.filter(x => !!x).map(x => x.value) as typeof result.instantiatesUri;
      result._instantiatesUri = Extension.serializePrimitiveExtensionArray(this.instantiatesUri);
    }

    if (this.instantiates) {
      result.instantiates = this.instantiates.filter(x => !!x).map(x => x.value) as typeof result.instantiates;
      result._instantiates = Extension.serializePrimitiveExtensionArray(this.instantiates);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.intent) {
      result.intent = this.intent.value;
      result._intent = Extension.serializePrimitiveExtension(this.intent);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.dateTime) {
      result.dateTime = this.dateTime.value;
      result._dateTime = Extension.serializePrimitiveExtension(this.dateTime);
    }

    if (this.orderer) {
      result.orderer = this.orderer.toJSON();
    }

    if (this.allergyIntolerance) {
      result.allergyIntolerance = this.allergyIntolerance.map((x) => x.toJSON());
    }

    if (this.foodPreferenceModifier) {
      result.foodPreferenceModifier = this.foodPreferenceModifier.map((x) => x.toJSON());
    }

    if (this.excludeFoodModifier) {
      result.excludeFoodModifier = this.excludeFoodModifier.map((x) => x.toJSON());
    }

    if (this.oralDiet) {
      result.oralDiet = this.oralDiet.toJSON();
    }

    if (this.supplement) {
      result.supplement = this.supplement.map((x) => x.toJSON());
    }

    if (this.enteralFormula) {
      result.enteralFormula = this.enteralFormula.toJSON();
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): NutritionOrder {
    return NutritionOrder.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrder";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
