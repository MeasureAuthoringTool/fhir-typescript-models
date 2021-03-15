import {
  CohortPopulationMap,
  ContinuousVariablePopulationMap,
  lookupPopulationMapSubclass,
  PopulationSet,
  ProportionPopulationMap,
  RatioPopulationMap,
  StatementReference,
} from "../src/models/cqm";

describe("Populations", () => {
  it("can lookup population map subclasses", () => {
    expect(lookupPopulationMapSubclass("unknown")).toBeUndefined();
    expect(lookupPopulationMapSubclass("CohortPopulationMap")).toBeDefined();
    expect(lookupPopulationMapSubclass("CohortPopulationMap")).toEqual(
      CohortPopulationMap,
    );
    expect(
      lookupPopulationMapSubclass("ContinuousVariablePopulationMap"),
    ).toEqual(ContinuousVariablePopulationMap);
    expect(lookupPopulationMapSubclass("ProportionPopulationMap")).toEqual(
      ProportionPopulationMap,
    );
    expect(lookupPopulationMapSubclass("RatioPopulationMap")).toEqual(
      RatioPopulationMap,
    );
  });

  it("can serialize/deserialize CQM::StatementReference", () => {
    const itJson = { library_name: "library1", statement_name: "name1" };
    const it: StatementReference = StatementReference.parse(itJson);
    expect(it.library_name).toEqual("library1");
    expect(it.statement_name).toEqual("name1");
    expect(it.toJSON()).toEqual(itJson);
  });

  it("can serialize/deserialize CQM::CohortPopulationMap", () => {
    const itJson = {
      resource_type: "CohortPopulationMap",
      IPP: { library_name: "library1", statement_name: "name1" },
    };
    const it: CohortPopulationMap = CohortPopulationMap.parse(itJson);
    expect(it.resource_type).toEqual("CohortPopulationMap");
    expect(it.IPP).toBeDefined();
    expect(it.IPP?.library_name).toEqual("library1");
    expect(it.IPP?.statement_name).toEqual("name1");
    expect(it.toJSON()).toEqual(itJson);
    expect(it.codes).toEqual(["IPP"]);
  });

  it("can serialize/deserialize CQM::PopulationSet", () => {
    const itJson = {
      populations: {
        resource_type: "CohortPopulationMap",
        IPP: {
          library_name: "library_CohortPopulationMap",
          statement_name: "name_CohortPopulationMap",
        },
      },
      stratifications: [
        {
          title: "title_Stratification",
          stratification_id: "random_stratification_id",
          statement: {
            library_name: "library_Stratification",
            statement_name: "name_Stratification",
          },
        },
      ],
      supplemental_data_elements: [
        {
          library_name: "library_name_ref1",
          statement_name: "name_ref1",
        },
        { library_name: "library_name_ref2", statement_name: "name_ref2" },
      ],
      observations: [
        {
          observation_function: {
            library_name: "observation_function_library_name_1",
            statement_name: "observation_function_statement_name_1",
          },
          observation_parameter: {
            library_name: "observation_parameter_library_name_1",
            statement_name: "observation_parameter_statement_name_1",
          },
          aggregation_type: "aggregation_type_1",
          set_id: "set_id_1",
        },
        {
          observation_function: {
            library_name: "observation_function_library_name_2",
            statement_name: "observation_function_statement_name_2",
          },
          observation_parameter: {
            library_name: "observation_parameter_library_name_2",
            statement_name: "observation_parameter_statement_name_2",
          },
          aggregation_type: "aggregation_type_2",
          set_id: "set_id_2",
        },
      ],
    };
    const it: PopulationSet = PopulationSet.parse(itJson);
    expect(it).toBeDefined();
    expect(it.toJSON()).toEqual(itJson);
    expect(it.populations).toBeDefined();
    expect(it.populations?.resource_type).toEqual("CohortPopulationMap");
    expect(it.populations?.codes).toEqual(["IPP"]);
  });
  it("ProportionPopulationMap has all codes", () => {
    const it: ProportionPopulationMap = new ProportionPopulationMap();
    it.DENEX = new StatementReference();
    it.DENEXCEP = new StatementReference();
    it.IPP = new StatementReference();
    it.NUMER = new StatementReference();
    expect(it.codes).toEqual(["DENEX", "DENEXCEP", "IPP", "NUMER"]);
  });
  it("codes work properly from dynamic js", () => {
    const it: ProportionPopulationMap = new ProportionPopulationMap();
    it.DENEX = new StatementReference();
    it.DENEXCEP = new StatementReference();
    it.IPP = new StatementReference();
    it.NUMER = new StatementReference();

    // Assign a random dynamic property and ensure it's not returned as a code
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const js: any = it;
    // eslint-disable-next-line  @typescript-eslint/no-unsafe-member-access
    js.observation_values = {};
    expect(it.codes).toEqual(["DENEX", "DENEXCEP", "IPP", "NUMER"]);
  });
});
