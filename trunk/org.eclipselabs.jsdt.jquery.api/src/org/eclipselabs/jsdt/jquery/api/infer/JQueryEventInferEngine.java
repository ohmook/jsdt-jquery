/*
 * @(#) $CVSHeader:  $
 *
 * Copyright (C) 2011 by Netcetera AG.
 * All rights reserved.
 *
 * The copyright to the computer program(s) herein is the property of
 * Netcetera AG, Switzerland.  The program(s) may be used and/or copied
 * only with the written permission of Netcetera AG or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 *
 * @(#) $Id: codetemplates.xml,v 1.5 2004/06/29 12:49:49 hagger Exp $
 */
package org.eclipselabs.jsdt.jquery.api.infer;

import org.eclipse.wst.jsdt.core.ast.ASTVisitor;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.InferOptions;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;


public class JQueryEventInferEngine implements IInferEngine {

  private CompilationUnitDeclaration compilationUnit;
  private InferOptions options;

  @Override
  public void doInfer() {
    ASTVisitor inferer = new JQueryEventInferer();
    this.compilationUnit.traverse(inferer);

  }

  @Override
  public void initialize() {
    // nothing yet

  }

  @Override
  public void initializeOptions(InferOptions inferOptions) {
    this.options = this.options;
  }

  @Override
  public void setCompilationUnit(CompilationUnitDeclaration parsedUnit) {
    this.compilationUnit = parsedUnit;

  }

}
